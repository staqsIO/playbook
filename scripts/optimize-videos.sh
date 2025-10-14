#!/bin/bash

# Video Optimization Script
# This script compresses videos and generates WebM versions for better performance
# 
# Prerequisites:
#   - Install ffmpeg: brew install ffmpeg (macOS) or apt-get install ffmpeg (Linux)
#
# Usage: ./scripts/optimize-videos.sh

set -e

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}   Video Optimization Script${NC}"
echo -e "${BLUE}========================================${NC}\n"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo -e "${YELLOW}Error: ffmpeg is not installed.${NC}"
    echo "Please install ffmpeg first:"
    echo "  macOS: brew install ffmpeg"
    echo "  Linux: sudo apt-get install ffmpeg"
    exit 1
fi

# Define directories
VIDEO_DIR="public/videos"
POSTER_DIR="public/images/posters"
OUTPUT_DIR="public/videos/optimized"

# Create output directories
mkdir -p "$OUTPUT_DIR"
mkdir -p "$POSTER_DIR"

# Video files to optimize
VIDEOS=(
    "intro.mp4"
    "liberty-xbox.mp4"
    "lovb.mp4"
    "whistle.mp4"
    "electrolit.mp4"
    "pancakes.mp4"
)

echo -e "${GREEN}Step 1: Generating poster images (first frame of each video)${NC}\n"

for video in "${VIDEOS[@]}"; do
    if [ -f "$VIDEO_DIR/$video" ]; then
        poster_name="${video%.mp4}.jpg"
        echo "Generating poster: $poster_name"
        
        ffmpeg -i "$VIDEO_DIR/$video" \
            -ss 00:00:00.500 \
            -vframes 1 \
            -vf scale=1920:-2 \
            -q:v 2 \
            "$POSTER_DIR/$poster_name" \
            -y 2>/dev/null
        
        echo -e "  ✓ Created $POSTER_DIR/$poster_name\n"
    fi
done

echo -e "\n${GREEN}Step 2: Compressing MP4 videos (target: 75% size reduction)${NC}\n"

for video in "${VIDEOS[@]}"; do
    if [ -f "$VIDEO_DIR/$video" ]; then
        echo "Compressing: $video"
        
        # Get original file size
        original_size=$(du -h "$VIDEO_DIR/$video" | cut -f1)
        
        # Compress video with high quality settings
        # CRF: 28 for aggressive compression (18-28 range, higher = smaller file)
        # preset slow: better compression
        # movflags +faststart: optimize for streaming
        ffmpeg -i "$VIDEO_DIR/$video" \
            -c:v libx264 \
            -crf 28 \
            -preset slow \
            -vf scale=-2:1080 \
            -movflags +faststart \
            -c:a aac \
            -b:a 128k \
            -y \
            "$OUTPUT_DIR/$video" 2>/dev/null
        
        # Get new file size
        new_size=$(du -h "$OUTPUT_DIR/$video" | cut -f1)
        
        echo -e "  ✓ Original: $original_size → Compressed: $new_size"
        echo -e "  Location: $OUTPUT_DIR/$video\n"
    fi
done

echo -e "\n${GREEN}Step 3: Generating WebM versions (30-50% smaller than MP4)${NC}\n"

for video in "${VIDEOS[@]}"; do
    if [ -f "$VIDEO_DIR/$video" ]; then
        webm_name="${video%.mp4}.webm"
        echo "Generating WebM: $webm_name"
        
        # Generate WebM with VP9 codec
        # CRF: 35 for WebM (30-40 range)
        # b:v 0: variable bitrate
        ffmpeg -i "$VIDEO_DIR/$video" \
            -c:v libvpx-vp9 \
            -crf 35 \
            -b:v 0 \
            -vf scale=-2:1080 \
            -c:a libopus \
            -b:a 96k \
            -y \
            "$OUTPUT_DIR/$webm_name" 2>/dev/null
        
        webm_size=$(du -h "$OUTPUT_DIR/$webm_name" | cut -f1)
        echo -e "  ✓ Created: $webm_size - $OUTPUT_DIR/$webm_name\n"
    fi
done

echo -e "\n${BLUE}========================================${NC}"
echo -e "${GREEN}Optimization Complete!${NC}"
echo -e "${BLUE}========================================${NC}\n"

echo "Summary:"
echo "  ✓ Poster images created in: $POSTER_DIR/"
echo "  ✓ Optimized MP4 files in: $OUTPUT_DIR/"
echo "  ✓ WebM files in: $OUTPUT_DIR/"
echo ""
echo "Next Steps:"
echo "  1. Review the optimized videos to ensure quality is acceptable"
echo "  2. If satisfied, replace original videos:"
echo "     cp $OUTPUT_DIR/*.mp4 $VIDEO_DIR/"
echo "     cp $OUTPUT_DIR/*.webm $VIDEO_DIR/"
echo "  3. Commit the optimized videos to your repository"
echo ""
echo -e "${YELLOW}⚠️  Tip: Test the videos in your browser before replacing originals${NC}"

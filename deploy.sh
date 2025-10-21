#!/bin/bash

# Deploy script for Naofumi Birthday Website
# This script builds the project and deploys to S3

set -e  # Exit on any error

echo "🎂 Starting deployment to S3..."
echo ""

# Step 1: Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""

# Step 2: Sync to S3 bucket
echo "☁️  Uploading to S3 bucket: naofumi-ezaki..."
aws s3 sync dist/ s3://naofumi-ezaki --delete

if [ $? -ne 0 ]; then
    echo "❌ S3 sync failed!"
    exit 1
fi

echo "✅ Files uploaded successfully!"
echo ""

# Step 3: Set proper content types for specific files
echo "🔧 Setting content types..."
aws s3 cp s3://naofumi-ezaki/ s3://naofumi-ezaki/ \
    --recursive \
    --exclude "*" \
    --include "*.html" \
    --content-type "text/html" \
    --metadata-directive REPLACE

aws s3 cp s3://naofumi-ezaki/ s3://naofumi-ezaki/ \
    --recursive \
    --exclude "*" \
    --include "*.css" \
    --content-type "text/css" \
    --metadata-directive REPLACE

aws s3 cp s3://naofumi-ezaki/ s3://naofumi-ezaki/ \
    --recursive \
    --exclude "*" \
    --include "*.js" \
    --content-type "application/javascript" \
    --metadata-directive REPLACE

echo "✅ Content types set!"
echo ""

# Optional: Uncomment the following lines if you're using CloudFront
# echo "🔄 Invalidating CloudFront cache..."
# aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
# echo "✅ CloudFront cache invalidated!"
# echo ""

echo "🎉 Deployment completed successfully!"
echo "🌐 Your website is now live!"


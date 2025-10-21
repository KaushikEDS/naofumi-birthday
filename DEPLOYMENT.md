# Deployment Guide

## Prerequisites

1. **AWS CLI** must be installed and configured
   ```bash
   aws --version
   ```

2. **AWS Credentials** must be configured with access to the S3 bucket
   ```bash
   aws configure
   ```

3. **Node.js** and **npm** must be installed

## Deploying to S3

### Quick Deploy

Simply run the deployment script:

```bash
./deploy.sh
```

### What the Script Does

1. **Builds the project** - Runs `npm run build` to create production files
2. **Syncs to S3** - Uploads all files from `dist/` to `s3://naofumi-ezaki`
3. **Sets content types** - Ensures proper MIME types for HTML, CSS, and JS files
4. **Deletes old files** - Removes files from S3 that no longer exist locally

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# Sync to S3
aws s3 sync dist/ s3://naofumi-ezaki --delete
```

## CloudFront Integration

If you're using CloudFront for CDN, uncomment these lines in `deploy.sh`:

```bash
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

Replace `YOUR_DISTRIBUTION_ID` with your actual CloudFront distribution ID.

## S3 Bucket Configuration

Make sure your S3 bucket is configured for static website hosting:

1. Go to S3 Console → naofumi-ezaki bucket
2. Properties → Static website hosting → Enable
3. Index document: `index.html`
4. Error document: `index.html` (for SPA routing)

## Permissions

Ensure your bucket policy allows public read access:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::naofumi-ezaki/*"
        }
    ]
}
```

## Troubleshooting

### Build Fails
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`

### S3 Sync Fails
- Verify AWS credentials: `aws sts get-caller-identity`
- Check bucket permissions
- Ensure bucket name is correct

### Website Not Loading
- Check S3 static website hosting is enabled
- Verify bucket policy allows public access
- Clear CloudFront cache if using CDN

## Website URL

After deployment, your website will be available at:
- **S3 URL**: `http://naofumi-ezaki.s3-website-[region].amazonaws.com`
- **CloudFront URL**: (if configured) `https://your-distribution.cloudfront.net`


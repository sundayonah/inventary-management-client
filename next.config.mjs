/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['onahsunday.vercel.app'],
        // remotePatterns: [
        //     {
        //         protocol: "https",
        //         hostname: "s3-inventorymanagement.s3.us-east-2.amazonaws.com",
        //         port: "",
        //         pathname: "/**",
        //     },
        // ],
    },
};

export default nextConfig;
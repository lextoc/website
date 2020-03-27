module.exports = {
  apps: [
    {
      name: "website",
      cwd: "./next/",
      script: "yarn start",
      error_file: "website-logs/err.log",
      out_file: "website-logs/out.log",
      time: true,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    },
    {
      name: "strapi",
      cwd: "./strapi/",
      script: "server.js",
      error_file: "strapi-logs/err.log",
      out_file: "strapi-logs/out.log",
      autorestart: true,
      max_memory_restart: "1G",
      env: {
        PORT: 1337,
        NODE_ENV: "production",
        DATABASE_HOST: "localhost",
        DATABASE_PORT: "5432",
        DATABASE_NAME: "website",
        DATABASE_USERNAME: "website",
        DATABASE_PASSWORD: "846f0748744fc910845bc58af8f61ee3"
      }
    }
  ]
};


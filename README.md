# Yeaple Innovations

This is my personal website which contains some information about myself, my career, and some of the projects I've worked on.

## Notes about design

I'll be intentionally checking in the `dist` folder and its contents because I'm going to be hosting this with Github pages. The content to be served must be checked in to source control. So, the build process looks like this:

1. Make changes on a branch
1. Run `npm run build-release` 
1. Check in changes including the output in the dist folder
1. Merge to master when ready to deploy
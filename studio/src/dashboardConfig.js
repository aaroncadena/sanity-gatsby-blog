export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea92ff2d5aeea9cb885878b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cv1ymu2n',
                  apiId: '8b8d51df-1733-4bf0-8ab5-57bf6cbb51b3'
                },
                {
                  buildHookId: '5ea92ff29d7a377fab6b1b3a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ctxdsi7e',
                  apiId: 'a1da5474-0d6f-4a34-8d7e-2bf72d8c9090'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aaroncadena/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ctxdsi7e.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

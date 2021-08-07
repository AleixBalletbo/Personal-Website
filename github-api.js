exports.githubApiQuery = `
  query($github_login: String!) {
    user(login: $github_login) {
      name
      pinnedItems(first: 100, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            description
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
            url
            primaryLanguage {
              name
              color
            }
            stargazerCount
            forkCount
            updatedAt
          }
        }
      }
    }
  }
`


const LinksSocialMedia = {
  github: "PhilipOliver",
  youtube: "channel/UCR4O3XW6JEPR4wJlSsY7lNw",
  facebook: "philipinho.oliver",
  instagram: "philipoliver726",
  twitter: "PhilipOliv3r"
}

// substituindo os links
function changeSocialMediaLinks() {
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  // Pegando o JSON
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  // Transformando em JSON
  fetch(url)
    .then(response => response.json() )
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

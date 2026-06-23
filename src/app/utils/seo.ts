export function updatePageTitle(title: string) {
  document.title = `${title} | The United Republic`;
}

export function updateMetaDescription(description: string) {
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);
}

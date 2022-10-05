import Article from './Article'

const ARTICLE = {
  id: 1,
  title: 'First Post',
  body: `Hello Again.`,
}

export const full = () => {
  return <Article article={ARTICLE} />
}

export const summary = () => {
  return <Article article={ARTICLE} summary={true} />
}

export default { title: 'Components/Article' }
import HomeContent from './_home/HomeContent'
import HomeKnowledgePreview from '@/components/HomeKnowledgePreview'

export default function Page() {
  return <HomeContent knowledgeHub={<HomeKnowledgePreview />} />
}

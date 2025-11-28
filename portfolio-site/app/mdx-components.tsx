import type { MDXComponents } from 'mdx/types'
import { MediaGallery } from '../components/MediaGallery'
import { ProjectButton } from '../components/ProjectButton'
 
const components: MDXComponents = {
  MediaGallery,
  ProjectButton,
}
 
export function useMDXComponents(): MDXComponents {
  return components
}
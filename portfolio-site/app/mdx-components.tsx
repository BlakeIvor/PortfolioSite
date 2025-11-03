import type { MDXComponents } from 'mdx/types'
import { MediaGallery } from '../components/MediaGallery'
 
const components: MDXComponents = {
  MediaGallery,
}
 
export function useMDXComponents(): MDXComponents {
  return components
}
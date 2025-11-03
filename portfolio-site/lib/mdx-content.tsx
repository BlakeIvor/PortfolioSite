import { MDXProps } from 'mdx/types';
import { ComponentType } from 'react';
import { MediaGallery } from '../components/MediaGallery';

// Import all MDX files statically
import SteamRecommendationEngine from '../content/projects/steam-recommendation-engine.mdx';
import Meltdown from '../content/projects/meltdown.mdx';
import ArcadiaLearningApp from '../content/projects/arcadia-learning-app.mdx';
import Microblog from '../content/projects/Microblog.mdx';
import MixedRealityHeadset from '../content/projects/mixed-reality-headset.mdx';
import StarboundWanderers from '../content/projects/starbound-wanderers.mdx';
import Bellicose from '../content/projects/bellicose.mdx';
import InventoryManagement from '../content/projects/inventory-management.mdx';

// MDX components that will be available in all MDX files
const mdxComponents = {
  MediaGallery,
};

// Define the type for MDX components
type MDXComponent = ComponentType<MDXProps>;

// Create wrapper components that provide the MDX components
const createMDXWrapper = (Component: MDXComponent) => {
  const WrappedComponent = (props: MDXProps) => <Component components={mdxComponents} {...props} />;
  
  // Set display name for debugging
  WrappedComponent.displayName = `MDXWrapper(${Component.displayName || Component.name || 'Component'})`;
  
  return WrappedComponent;
};

// Map project slugs to their MDX components
export const projectContent: Record<string, ComponentType<MDXProps>> = {
  'steam-recommendation-engine': createMDXWrapper(SteamRecommendationEngine as MDXComponent),
  'meltdown': createMDXWrapper(Meltdown as MDXComponent),
  'arcadia-learning-app': createMDXWrapper(ArcadiaLearningApp as MDXComponent),
  'Microblog': createMDXWrapper(Microblog as MDXComponent),
  'mixed-reality-headset': createMDXWrapper(MixedRealityHeadset as MDXComponent),
  'starbound-wanderers': createMDXWrapper(StarboundWanderers as MDXComponent),
  'bellicose': createMDXWrapper(Bellicose as MDXComponent),
  'inventory-management': createMDXWrapper(InventoryManagement as MDXComponent),
};

export function getProjectContent(slug: string): ComponentType<MDXProps> | null {
  return projectContent[slug] || null;
}
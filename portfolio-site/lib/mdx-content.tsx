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

// Create wrapper components that provide the MDX components
const createMDXWrapper = (Component: any) => {
  return (props: any) => <Component components={mdxComponents} {...props} />;
};

// Map project slugs to their MDX components
export const projectContent: Record<string, React.ComponentType> = {
  'steam-recommendation-engine': createMDXWrapper(SteamRecommendationEngine),
  'meltdown': createMDXWrapper(Meltdown),
  'arcadia-learning-app': createMDXWrapper(ArcadiaLearningApp),
  'Microblog': createMDXWrapper(Microblog),
  'mixed-reality-headset': createMDXWrapper(MixedRealityHeadset),
  'starbound-wanderers': createMDXWrapper(StarboundWanderers),
  'bellicose': createMDXWrapper(Bellicose),
  'inventory-management': createMDXWrapper(InventoryManagement),
};

export function getProjectContent(slug: string): React.ComponentType | null {
  return projectContent[slug] || null;
}
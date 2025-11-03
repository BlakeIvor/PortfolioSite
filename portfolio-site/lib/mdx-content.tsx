// Import all MDX files statically
import SteamRecommendationEngine from '../content/projects/steam-recommendation-engine.mdx';
import Meltdown from '../content/projects/meltdown.mdx';
import ArcadiaLearningApp from '../content/projects/arcadia-learning-app.mdx';
import Microblog from '../content/projects/Microblog.mdx';
import MixedRealityHeadset from '../content/projects/mixed-reality-headset.mdx';
import StarboundWanderers from '../content/projects/starbound-wanderers.mdx';
import Bellicose from '../content/projects/bellicose.mdx';
import InventoryManagement from '../content/projects/inventory-management.mdx';

// Map project slugs to their MDX components
export const projectContent: Record<string, React.ComponentType> = {
  'steam-recommendation-engine': SteamRecommendationEngine,
  'meltdown': Meltdown,
  'arcadia-learning-app': ArcadiaLearningApp,
  'Microblog': Microblog,
  'mixed-reality-headset': MixedRealityHeadset,
  'starbound-wanderers': StarboundWanderers,
  'bellicose': Bellicose,
  'inventory-management': InventoryManagement,
};

export function getProjectContent(slug: string): React.ComponentType | null {
  return projectContent[slug] || null;
}
import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemas/blockContent";

import { about, tech, hero, projects } from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, hero, about, tech, projects],
};

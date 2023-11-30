import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemas/blockContent";

import { about, tech, hero } from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, hero, about, tech],
};

import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemas/blockContent";

import { about, tech } from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, about, tech],
};

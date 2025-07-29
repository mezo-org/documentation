import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { topicSchema } from 'starlight-sidebar-topics/schema'
import type {SchemaContext} from 'astro:content';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: (context: SchemaContext) => {
		return docsSchema()(context).extend({ title: z.string().optional() }).and(topicSchema)
	} })
};

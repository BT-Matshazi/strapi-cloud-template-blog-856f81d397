import type { Schema, Struct } from '@strapi/strapi';

export interface CodeBlocksDocker extends Struct.ComponentSchema {
  collectionName: 'components_code_blocks_dockers';
  info: {
    displayName: 'Docker';
    icon: 'code';
  };
  attributes: {
    caption: Schema.Attribute.String;
    Docker: Schema.Attribute.Text &
      Schema.Attribute.CustomField<
        'plugin::strapi-code-editor-custom-field.code-editor-text',
        {
          language: 'dockerfile';
        }
      >;
  };
}

export interface CodeBlocksJavascript extends Struct.ComponentSchema {
  collectionName: 'components_code_blocks_javascripts';
  info: {
    displayName: 'Javascript';
    icon: 'code';
  };
  attributes: {
    caption: Schema.Attribute.String;
    javascript: Schema.Attribute.Text &
      Schema.Attribute.CustomField<
        'plugin::strapi-code-editor-custom-field.code-editor-text',
        {
          language: 'typescript';
        }
      >;
  };
}

export interface CodeBlocksTypescript extends Struct.ComponentSchema {
  collectionName: 'components_code_blocks_typescripts';
  info: {
    displayName: 'Typescript';
    icon: 'code';
  };
  attributes: {
    caption: Schema.Attribute.String;
    typescript: Schema.Attribute.Text &
      Schema.Attribute.CustomField<
        'plugin::strapi-code-editor-custom-field.code-editor-text',
        {
          language: 'typescript';
        }
      >;
  };
}

export interface SharedBeforeAndAfterImageSlider
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_before_and_after_image_sliders';
  info: {
    displayName: 'BeforeAndAfterImageSlider';
  };
  attributes: {
    afterImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    beforeImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'code-blocks.docker': CodeBlocksDocker;
      'code-blocks.javascript': CodeBlocksJavascript;
      'code-blocks.typescript': CodeBlocksTypescript;
      'shared.before-and-after-image-slider': SharedBeforeAndAfterImageSlider;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}

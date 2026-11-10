import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: 'Links page' },
  },
  singletons: {
    profile: singleton({
      label: 'Profile',
      path: 'src/content/profile',
      format: 'json',
      schema: {
        name: fields.text({
          label: 'Name',
          validation: { length: { min: 1 } },
        }),
        bio: fields.text({
          label: 'Bio',
          multiline: true,
        }),
        avatar: fields.image({
          label: 'Avatar',
          description: 'Optional. A placeholder image is shown when this is empty.',
          directory: 'public/images/avatar',
          publicPath: '/images/avatar/',
        }),
        links: fields.array(
          fields.object({
            label: fields.text({
              label: 'Label',
              validation: { length: { min: 1 } },
            }),
            href: fields.text({
              label: 'URL',
              description: 'A full URL (https://…) or mailto:you@example.com',
              validation: { length: { min: 1 } },
            }),
          }),
          {
            label: 'Links',
            itemLabel: (props) => props.fields.label.value || 'New link',
          },
        ),
      },
    }),
  },
});

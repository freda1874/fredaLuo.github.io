

export function useMDXComponents(components) {
  return {
    ...components,
    Image: (props) => <img {...props} />,
  }
}

declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: sting }
  >;

  const src: string;
  export default src;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}

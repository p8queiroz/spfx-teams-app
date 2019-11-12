declare interface ITargetWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'TargetWebPartStrings' {
  const strings: ITargetWebPartStrings;
  export = strings;
}

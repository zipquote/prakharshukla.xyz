declare module 'tinytime' {
  export default function tinytime(template: string): {
    render: (date: Date) => string;
  };
}

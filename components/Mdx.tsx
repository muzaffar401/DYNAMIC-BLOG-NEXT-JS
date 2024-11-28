import { useMDXComponent } from "next-contentlayer/hooks"
import Image, { ImageProps } from "next/image";
import React from "react";
const components = {
    Image: (props: ImageProps) => <Image {...props} alt="blog image" />,
};
interface Props {
    code: string
}
const Mdx = ({ code }: Props) => {
    const Component = useMDXComponent(code)
    return <Component components={components} />;

};

export default Mdx;
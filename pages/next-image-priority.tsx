import Image from 'next/image';

export default function NextImagePriority() {
    return (
        <Image
            alt="test"
            src="https://w.wallhaven.cc/full/ex/wallhaven-exql8w.jpg"
            width={500}
            height={500}
            priority={true}
        />
    );
}

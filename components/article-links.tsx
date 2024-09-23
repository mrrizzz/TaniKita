import Link from "next/link";
import Image from "next/image";

interface ArticleLinkProps {
    href: string;
    imageSrc: string;
    imageAlt: string;
    category: string;
    title: string;
    date: string;
    description: string;
}

export const articles = [
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
    {
        href: 'https://www.kompasiana.com/ahmadwalfaiz/66e09901ed64157d8462c802/agrikultur-dan-tata-kelola-perkebunan-mini-di-lingkungan-perumahan-tempat-tinggal-di-perkotaan',
        imageSrc: '/image.jpg',
        imageAlt: 'Deskripsi gambar',
        category: 'Crop Production',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
        date: '02 September 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, earum nihil. Et fugiat maiores blanditiis tempora labore nostrum consequatur, sit quasi omnis fugit debitis! Asperiores fuga non hic debitis expedita.'
    },
];

export const ArticleLink: React.FC<ArticleLinkProps> = ({ href, imageSrc, imageAlt, category, title, date, description }) => {
    return (
        <Link href={href} className="flex flex-col gap-y-2 group">
            <div className="w-full h-56 rounded-lg border overflow-hidden">
                <Image src={imageSrc} alt={imageAlt} width={400} height={224} className="transform transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex gap-2">
                <h5 className="text-primary font-bold">{category}</h5>
                <p>|</p>
                <p>{date}</p>
            </div>
            <h4 className="font-bold text-2xl text-justify line-clamp-3">{title}</h4>
            <p className="text-justify line-clamp-3">{description}</p>
        </Link>
    );
};
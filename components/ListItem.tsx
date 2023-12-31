'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  name,
  href,
}) => {

  const router = useRouter();

  const onClick = () => {
    router.push(href);
  }
  return (
    <button
      className="
        relative 
        group 
        flex 
        items-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-100/10 
        cursor-pointer 
        hover:bg-neutral-100/20 
        transition 
        pr-4
      "
    >
      <div
        className="
          relaative
          min-h-[64px]
          min-w-[64px]
        "
      >
        <Image
          className="object-cover"
          src={image}
          alt="image"
          width={100}
          height={100}
        />
      </div>
    </button>
  )
}

export default ListItem;
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-4 md:px-16 py-6 text-sm">
      <div className="flex flex-wrap justify-between gap-4">
        <div>
          <p>© CivicDataSpace</p>
          <a href="#" className="mr-4">About Us</a>
          <a href="#" className="mr-4">Sitemap</a>
          <a href="#">Contact</a>
        </div>
        
        <div className="flex gap-3 flex-col">
        <div className="flex justify-end">
          <p className="iconYellow2">Follow Us</p>
        </div>
        <div className="flex gap-3">
          <a href="#">
            <Image
              src="/assets/github.svg"
              alt="Github"
              width={15}
              height={15}
              priority
              className="imgSRc3"
            />
          </a>
          <a href="#">
            <Image
              src="/assets/linkedin.svg"
              alt="Github"
              width={15}
              height={15}
              priority
              className="imgSRc3"
            />
          </a>
          <a href="#">
            <Image
              src="/assets/twitter.svg"
              alt="Github"
              width={15}
              height={15}
              priority
              className="imgSRc3"
            />
          </a>
          <a href="#">
            <Image
              src="/assets/facebook.svg"
              alt="Github"
              width={15}
              height={15}
              priority
              className="imgSRc3"
            />
          </a>
        </div>  
          
        </div>
      </div>
    </footer>
  );
}

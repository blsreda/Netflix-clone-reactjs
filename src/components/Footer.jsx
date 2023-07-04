import { columnsOfFooter } from "../utils/constants";

const Footer = () => {
    return ( 
        <footer className="py-8 pb-[100px]"
        style={{
            backgroundImage:'linear-gradient(0deg, rgba(0, 8, 29, 1), rgba(0, 8, 29, 1))'
        }}>
            <div className="container mx-auto px-[4.5rem] text-[#ffffffb3]">
                <span className="flex mb-[50px]"> <p>
        Visit <a href="https://blsreda.online/">blsreda.online</a> for more information.
      </p></span>
                <div className="flex flex-wrap -mx-4">
                {columnsOfFooter.map((column) => (
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4" key={column.id}>
                        <ul className="list-none">
                            {column.links.map((link) => (
                            <li key={link}>
                                <a href="#" className="font-medium text-[15px] mb-[3px] underline">{link}</a>
                            </li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
            </div>
        </footer>
    );
}
export default Footer;
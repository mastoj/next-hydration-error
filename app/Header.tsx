import MainHeader from "./MainHeader";
import "@algolia/autocomplete-theme-classic/dist/theme.min.css";

type HeaderProps = {};

function Header({}: HeaderProps) {
    return (
        <div className="flex flex-col text-tiny w-full">
            <MainHeader />
        </div>
    );
}

export default Header;

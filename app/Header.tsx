import MainHeader from "./MainHeader";

type HeaderProps = {};

function Header({}: HeaderProps) {
    return (
        <div className="flex flex-col text-tiny w-full">
            <MainHeader />
        </div>
    );
}

export default Header;

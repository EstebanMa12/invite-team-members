import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import UsersTable from "../../components/UsersTable"
import Link from "../../components/Link"
import ModalForm from "../../components/ModalForm"
import { useState } from "react"
import SuccessMessage from "../../components/SuccessMessage"


const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <>
        <div className="container flex flex-row overflow-y-hidden">
            <Sidebar/>
            < div className="flex flex-col w-screen h-screen
            pb-14
            py-8
            px-16
            gap-10
            overflow-y-auto
            ">
                <Header/>
                <SuccessMessage/>
                <Link/>
                <UsersTable onOpenModal={openModal}/>
            </div>
        </div>
        {isModalOpen && <ModalForm closeModal={closeModal}/> }
        </>
    )
}

export default Home
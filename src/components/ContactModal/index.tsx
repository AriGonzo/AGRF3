import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { ImGithub } from "react-icons/im";

export default function ContactModal({ setShowModal }) {
  return (
    <div>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-10 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
            <div className="flex flex-col lg:flex-row">
              <div className="relative p-6 flex justify-center">
                <a href="https://www.linkedin.com/in/arigonzoari/" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-6 px-12 rounded inline-flex items-center">
                  <FaLinkedin className="text-5xl fill-purple-900" />
                </a>
              </div>
              <div className="relative p-6 flex justify-center">
                <a href="https://www.github.com/arigonzo" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-6 px-12 rounded inline-flex items-center">
                  <ImGithub className="text-5xl fill-purple-900" />
                </a>
              </div>
              <div className="relative p-6 flex justify-center">
                <a href="mailto:info@example.com" target="_blank" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-6 px-12 rounded inline-flex items-center">
                  <MdOutlineMail className="text-5xl fill-purple-900" />
                </a>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  )
}

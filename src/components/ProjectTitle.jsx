import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import classNames from "classnames"
import { useProjectStore } from "./ProjectStore"

export const ProjectTitle = ({ children,id }) => {
    const ref = useRef(null)
    const inView = useInView(ref, {margin:"-50% 0px -50% 0px"})
    // console.log(inView, children)
    const setInViewProject = useProjectStore(state => state.setInViewProject)
    const inViewProject = useProjectStore(state => state.inViewProject)
    useEffect(() => {
        if (inView) {
            setInViewProject(id)
        }
        if(!inView && inViewProject === id){
            setInViewProject(null)
        }
    },[inView,id,setInViewProject,inViewProject])
    return (
        <p ref={ref} className={classNames("text-5xl font-semibold py-16 transition-colors", inView ? "text-black": "text-gray-300")}>{children}</p>
    )
}
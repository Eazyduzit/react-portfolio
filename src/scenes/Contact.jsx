import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section>
      <div>Contact</div>
    </section>
  )
}

export default Contact

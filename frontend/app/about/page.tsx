import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About MedixMart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image
            src="/pharmacy-1.jpg?height=400&width=600&text=Pharmacy+Image"
            alt="PharmaCare Store"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At MedixMart, our mission is to provide high-quality pharmaceutical care and products to our community. We
            strive to improve the health and well-being of our customers through personalized service, expert advice,
            and a wide range of healthcare solutions.
          </p>
          <p className="text-lg">
            Founded in 2020, MedixMart has grown from a small local pharmacy to a trusted healthcare partner for
            thousands of families in our area. Our team of experienced pharmacists and healthcare professionals is
            dedicated to ensuring that every customer receives the care and attention they deserve.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "Customer-Centric Care",
            description:
              "We put our customers first, always striving to meet their unique healthcare needs with compassion and understanding.",
          },
          {
            title: "Quality and Safety",
            description:
              "We maintain the highest standards of quality and safety in all our products and services, ensuring the well-being of our customers.",
          },
          {
            title: "Continuous Learning",
            description:
              "We are committed to staying at the forefront of pharmaceutical advancements, constantly updating our knowledge to serve you better.",
          },
          {
            title: "Community Engagement",
            description:
              "We actively participate in community health initiatives, promoting wellness and education beyond our store walls.",
          },
          {
            title: "Ethical Practice",
            description:
              "We adhere to the highest ethical standards in all our operations, maintaining trust and integrity in everything we do.",
          },
          {
            title: "Accessibility",
            description:
              "We strive to make healthcare accessible to all, offering competitive pricing and a range of services to meet diverse needs.",
          },
        ].map((value, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-emerald-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Meet Our Team</h2>
        <p className="text-lg text-center mb-6">
          Our team of dedicated professionals is here to serve you. With years of experience and a passion for
          healthcare, we're committed to providing the best possible service to our community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Mr. Nipun Athukorala",
              role: "Head Pharmacist",
              image: "/profile-1.jpg?height=200&width=200&text=Jane+Smith",
            },
            {
              name: "John Doe",
              role: "Pharmacy Technician",
              image: "/avatar-1.png?height=200&width=200&text=John+Doe",
            },
            {
              name: "Emily Brown",
              role: "Customer Service Manager",
              image: "/avatar-1.png?height=200&width=200&text=Emily+Brown",
            },
          ].map((member, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-emerald-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


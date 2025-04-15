
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <p className="text-gray-600 mb-6">
              This is where you can write a detailed description about yourself, your background,
              and what drives you. Share your journey and what makes you unique in your field.
            </p>
            <p className="text-gray-600">
              You can also mention your professional experience, education, and any significant
              achievements that have shaped your career.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;

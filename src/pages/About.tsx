
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const About = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">About Walkover DSA Arena</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Connecting talent with opportunity</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Walkover DSA Arena aims to streamline the technical hiring process by providing 
              a fair, efficient, and comprehensive platform for evaluating candidates' 
              data structure and algorithm skills.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>For Candidates</CardTitle>
            <CardDescription>Showcase your coding skills</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our platform offers a clear and intuitive interface for solving coding challenges, 
              with instant feedback and detailed explanations to help you improve.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>For Recruiters</CardTitle>
            <CardDescription>Find the right talent efficiently</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Quickly identify top performers with our comprehensive analytics and reporting tools,
              allowing you to make data-driven hiring decisions.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Our Process</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">1. Problem Selection</h3>
            <p className="text-muted-foreground">
              Our team of experts carefully selects relevant DSA problems that accurately assess 
              real-world programming skills and algorithmic thinking.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">2. Evaluation</h3>
            <p className="text-muted-foreground">
              Submissions are evaluated based on correctness, efficiency, code quality, 
              and approach, providing a holistic assessment of a candidate's abilities.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">3. Analytics</h3>
            <p className="text-muted-foreground">
              Comprehensive reports highlight strengths and areas for improvement, 
              helping both candidates and recruiters understand performance in detail.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">About Walkover</h2>
        <p className="text-muted-foreground mb-4">
          Walkover is a leading technology company focused on creating innovative solutions 
          across various domains. With a team of passionate engineers and designers, we strive 
          to deliver exceptional products that solve real-world problems.
        </p>
        <p className="text-muted-foreground">
          Walkover DSA Arena is one of our initiatives to bridge the gap between talented 
          developers and companies seeking skilled professionals.
        </p>
      </div>
    </div>
  );
};

export default About;

"use client"

import Icons from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SignedIn, SignedOut } from "@/lib/auth-components"

export default function VerdantHomePage() {

  return (
      <div className="container mx-auto px-4 py-8">
        <section className="text-center py-20">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Verdant
          </h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto">
            Uncover the environmental story of any location
          </p>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Get instant access to environmental data, natural disaster risks, and endangered species information for any area.
          </p>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Verdant Provides</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Icons.Search, title: "Biodiversity Index", description: "Discover the richness of plant and animal species in the area." },
              { icon: Icons.AlertTriangle, title: "Natural Disaster Risk", description: "Assess potential risks from earthquakes, floods, and other natural events." },
              { icon: Icons.Fish, title: "Endangered Species", description: "Learn about threatened flora and fauna in the region." },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 bg-muted rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">See Verdant in Action</h2>
          <div className="max-w-4xl mx-auto bg-background p-8 border-x-8 rounded-3xl lg:border-none lg:rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <div className="rounded-lg flex items-center justify-center">
                <Icons.MapPin className="w-16 h-16" />
              </div>
            </div>
            <p className="text-center text-lg">
              Interact with our demo map powered by Google to see how Verdant provides detailed environmental insights for any location.
            </p>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Verdant</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Comprehensive Data", description: "Access a wide range of environmental indicators in one place." },
              { title: "Reliable Information", description: "Get the most accurate information from your most trusted sources" },
              { title: "Easy to Understand", description: "Complex data presented in clear, visual formats for easy interpretation." },
              { title: "Actionable Insights", description: "Gain knowledge that can inform decision-making and conservation efforts." },
            ].map((reason, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Your Environment?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Verdant today and gain valuable insights into the environmental landscape around you.
          </p>
          <Button size="lg" className="gap-2">
            <SignedIn>
              Explore Now <Icons.Leaf className="w-5 h-5" />
            </SignedIn>
            <SignedOut>
              Start Exploring for Free <Icons.Leaf className="w-5 h-5" />
            </SignedOut>
          </Button>
        </section>

        <section className="py-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Icons.MapPin, text: "Data for every county apart of the U.S" },
              { icon: Icons.Cloud, text: "Most update to date consensus and information" },
              { icon: Icons.AlertTriangle, text: "Risk assessments for 20 different environmental factors" },
            ].map((fact, index) => (
              <div key={index} className="flex items-center gap-4 bg-muted p-4 rounded-lg">
                <fact.icon className="w-8 h-8" />
                <span className="font-medium">{fact.text}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
  )
}

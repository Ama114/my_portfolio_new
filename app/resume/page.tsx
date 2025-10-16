import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Resume | Portfolio",
  description: "View and download the resume.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Resume</h1>
        <Button asChild>
          <a href="/resume.pdf" download>
            Download PDF
          </a>
        </Button>
      </div>

      <div className="w-full border border-border rounded-lg overflow-hidden bg-card">
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="w-full"
          style={{ height: "calc(100vh - 200px)" }}
        >
          <div className="p-6 text-sm text-muted-foreground">
            Unable to display the PDF inline. You can
            <a className="text-accent underline ml-1" href="/resume.pdf" target="_blank" rel="noreferrer">
              open it in a new tab
            </a>
            , or use the Download button above.
          </div>
        </object>
      </div>
    </div>
  )
}



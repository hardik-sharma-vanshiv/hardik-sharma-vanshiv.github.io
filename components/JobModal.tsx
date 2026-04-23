"use client"

import { MapPin, Clock, Users, Briefcase, Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { ApplicationModal } from "./ApplicationModal"

interface Job {
    jobId: string
    title: string
    description: string
    type: string
    requirements: string[]
    keyResponsibilities: string[]
    niceToHave: string[]
    workMode: string
    location: string
    openPositions: number
    lastDate: string | null
    isActive: boolean
    experienceRequired: {
        min: number
        max: number
    }
}

interface JobModalProps {
    job: Job
    isOpen: boolean
    onClose: () => void
}

export function JobModal({ job, isOpen, onClose }: JobModalProps) {
    const [showApplicationModal, setShowApplicationModal] = useState(false)

    const formatDate = (dateString: string | null) => {
        if (!dateString) return "No deadline specified"
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    const handleApplyClick = () => {
        setShowApplicationModal(true)
    }

    const handleApplicationClose = () => {
        setShowApplicationModal(false)
    }

    return (
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader className="flex flex-row justify-start">
                        <DialogTitle className="text-2xl font-bold text-black pr-3">{job.title}</DialogTitle>
                        <div className="flex gap-2 text-black">
                            <Badge variant="secondary">{job.type}</Badge>
                        </div>
                    </DialogHeader>

                    <div className="space-y-6">
                        {/* Job Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-black">
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                <span>{job.workMode}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>
                                    {job.openPositions} position{job.openPositions !== 1 ? "s" : ""}
                                </span>
                            </div>
                            {job.experienceRequired.min > 0 && (
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>
                                        {job.experienceRequired.min}-{job.experienceRequired.max} years
                                    </span>
                                </div>
                            )}
                            {job.lastDate && (
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>Apply by: {formatDate(job.lastDate)}</span>
                                </div>
                            )}
                        </div>

                        <Separator />

                        {/* Job Description */}
                        {/* <div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">About This Role</h3>
                            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                        </div> */}

                        {/* Key Responsibilities */}
                        {job.keyResponsibilities.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-3">Key Responsibilities</h3>
                                <ul className="space-y-2">
                                    {job.keyResponsibilities.map((responsibility, index) => (
                                        <li key={index} className="flex items-start gap-2 text-black">
                                            <span className="text-primary mt-1.5 text-xs">●</span>
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Requirements */}
                        {job.requirements.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-3">Requirements</h3>
                                <ul className="space-y-2">
                                    {job.requirements.map((requirement, index) => (
                                        <li key={index} className="flex items-start gap-2 text-black">
                                            <span className="text-primary mt-1.5 text-xs">●</span>
                                            <span>{requirement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Nice to Have */}
                        {job.niceToHave.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-3">Nice to Have</h3>
                                <ul className="space-y-2">
                                    {job.niceToHave.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-black">
                                            <span className="text-primary mt-1.5 text-xs">●</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <Separator />

                        {/* Apply Button */}
                        <div className="flex gap-3">
                            <Button
                                size="lg"
                                variant="default"
                                className="flex-1 bg-black hover:bg-primary/90 text-primary-foreground"
                                onClick={handleApplyClick}
                            >
                                Apply Now
                            </Button>
                            <Button size="lg"
                            className="border text-black"
                            onClick={onClose}>
                                Close
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <ApplicationModal job={job} isOpen={showApplicationModal} onClose={handleApplicationClose} />
        </>
    )
}

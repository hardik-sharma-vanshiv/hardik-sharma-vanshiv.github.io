"use client";

import type React from "react";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, X, CheckCircle, AlertCircle } from "lucide-react";
// import { Alert, AlertDescription } from "@/components/ui/alert"

interface Job {
    jobId: string;
    title: string;
    type: string;
}

interface ApplicationModalProps {
    job: Job;
    isOpen: boolean;
    onClose: () => void;
}

export function ApplicationModal({
    job,
    isOpen,
    onClose,
}: ApplicationModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
    });
    const [resume, setResume] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Check file type
            const allowedTypes = [".pdf", ".doc", ".docx"];
            const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();

            if (!allowedTypes.includes(fileExtension)) {
                setErrorMessage("Please upload a PDF, DOC, or DOCX file");
                return;
            }

            // Check file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                setErrorMessage("File size must be less than 5MB");
                return;
            }

            setResume(file);
            setErrorMessage("");
        }
    };

    const removeFile = () => {
        setResume(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !resume) {
            setErrorMessage(
                "Please fill in all required fields and upload your resume"
            );
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("phone", formData.phone);
            // formDataToSend.append("coverLetter", formData.coverLetter)
            formDataToSend.append("resume", resume);
            formDataToSend.append("jobId", job.jobId);
            formDataToSend.append("jobTitle", job.title);
            formDataToSend.append("jobType", job.type);

            const response = await fetch("/api/apply", {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error("Failed to submit application");
            }

            setSubmitStatus("success");

            const sendAcknowlegement = await fetch("/api/sendAcknoledgement", {
                method: "POST",
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                }),
            });

            console.log(sendAcknowlegement);
            // Reset form after successful submission
            setTimeout(() => {
                setFormData({ name: "", email: "", phone: "", coverLetter: "" });
                setResume(null);
                onClose();
                setSubmitStatus("idle");
            }, 4000);
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground">
                        Apply for {job.title}
                    </DialogTitle>
                </DialogHeader>

                {submitStatus === "success" ? (
                    <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Application Submitted!
                        </h3>
                        <p className="text-muted-foreground">
                            Thank you for your interest. We'll review your application and get
                            back to you soon.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* {errorMessage && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errorMessage}</AlertDescription>
                            </Alert>
                        )} */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="resume">Resume *</Label>
                            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                                {resume ? (
                                    <div className="flex items-center justify-between bg-muted rounded-lg p-3">
                                        <div className="flex items-center gap-2">
                                            <Upload className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm font-medium">{resume.name}</span>
                                            <span className="text-xs text-muted-foreground">
                                                ({(resume.size / 1024 / 1024).toFixed(1)} MB)
                                            </span>
                                        </div>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={removeFile}
                                            className="h-8 w-8 p-0"
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ) : (
                                    <div>
                                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                                        <p className="text-sm text-muted-foreground mb-2">
                                            Upload your resume (PDF, DOC, DOCX - Max 5MB)
                                        </p>
                                        <Input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="resume-upload"
                                        />
                                        <Label
                                            htmlFor="resume-upload"
                                            className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                        >
                                            Choose File
                                        </Label>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* <div className="space-y-2">
                            <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                            <Textarea
                                id="coverLetter"
                                value={formData.coverLetter}
                                onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                                placeholder="Tell us why you're interested in this position..."
                                rows={4}
                            />
                        </div> */}

                        <div className="flex gap-3 pt-4">
                            <Button
                                type="submit"
                                size="lg"
                                className="flex-1"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                onClick={onClose}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}

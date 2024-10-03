'use client'

import React, { useState, FormEvent } from 'react'
import { MessageCircle, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Label from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

// Mock function for submitFeedback
const submitFeedback = async (formData: FormData) => {
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { success: true, message: "Feedback submitted successfully!" }
}

interface StarRatingProps {
  rating: number
  setRating: (rating: number) => void
}

function StarRating({ rating, setRating }: StarRatingProps) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-6 h-6 cursor-pointer ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          onClick={() => setRating(star)}
        />
      ))}
    </div>
  )
}

function SubmitButton() {
  return (
    <Button type="submit" className="bg-indigo-900 hover:bg-indigo-800 text-white">
      Submit feedback
    </Button>
  )
}

export default function Feedback() {
  const [open, setOpen] = useState(false)
  const [rating, setRating] = useState<number>(0)
  const { toast } = useToast()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    formData.append('rating', rating.toString())
    
    const response = await submitFeedback(formData)

    if (response.success) {
      toast({
        title: "Success",
        description: response.message,
      })
      setOpen(false)
      setRating(0)
    } else {
      toast({
        title: "Error",
        description: response.message,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center"> {/* Ensure full screen bg color */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-indigo-900 hover:bg-indigo-800 text-white mt-0 mb-0"> {/* Remove extra margins */}
            <MessageCircle className="mr-2 h-4 w-4" />
            Feedback
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Send feedback</DialogTitle>
            <DialogDescription>
              We'd love to hear your thoughts! Please fill out this form to send us your feedback.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="col-span-1">Name</Label>
                <Input id="name" name="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="feedback" className="col-span-1">Feedback</Label>
                <Textarea id="feedback" name="feedback" className="col-span-3" />
              </div>
              <StarRating rating={rating} setRating={setRating} />
            </div>
            <DialogFooter className="flex justify-center">
              <SubmitButton />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
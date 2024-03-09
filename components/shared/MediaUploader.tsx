import React from 'react'
import { useToast } from "@/components/ui/use-toast"
import { CldUploadWidget } from 'next-cloudinary'

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  image: any;
  publicId: string;
  type: string;
}

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type
}: MediaUploaderProps) => {
  const {toast} = useToast();

  const onUploadSuccessHandler = (result: any) => {
    toast({
      title: 'Image uploaded succesfully',
      description: '1 Credit was deducted from your account.',
      duration: 5000,
      className: 'success-toast',
    })
  }

  const onUploadErrorHandler = () => {
    toast({
      title: 'Something went wrong while uploading',
      description: 'Please try again.',
      duration: 5000,
      className: 'error-toast',
    })
  }

  return (
    <CldUploadWidget
      uploadPreset='AbImageAlchemyAi'
      options={{
        multiple: false,
        resourceType: 'image',
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({open}) => (
        <div className="flex flex-col fap-4">
          <h3 className="h3-bold text-dark-600">
            Original
          </h3>
          {publicId ? (
            <>
              HERE IS THE IMAGE
            </>
          ): (
            <div>

              HERE IS NULL IMAGE
            </div>
          )

          }
        </div>
      )}

    </CldUploadWidget>
  )
}

export default MediaUploader
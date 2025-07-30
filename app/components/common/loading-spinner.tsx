import { Spinner } from '@heroui/react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-8">
      <Spinner size="lg" color="primary" />
    </div>
  );
}

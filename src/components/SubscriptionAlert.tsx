import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const SubscriptionAlert: React.FC = () => {
  const { subscriptionEndsIn } = useAuthStore();

  if (!subscriptionEndsIn || subscriptionEndsIn > 4) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-yellow-50 p-4 rounded-lg shadow-lg border border-yellow-200">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Subscription Ending Soon
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Your subscription will expire in {subscriptionEndsIn} days. Please renew to maintain uninterrupted access to all features.
            </p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                type="button"
                className="bg-yellow-50 px-2 py-1.5 rounded-md text-sm font-medium text-yellow-800 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-50 focus:ring-yellow-600"
              >
                Renew Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionAlert;
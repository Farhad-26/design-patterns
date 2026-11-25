//first understand the problem
//image we are building a notificatin system
//we have three types of notifications: Email, SMS, and Push Notific.
//without the factory our code might look like this:

class DummyEmailNotification{
    send(){
        console.log("Sending Email Notification: ");
    }
}

class DummySMSNotification{
    send(){
        console.log("Sending SMS Notification: ");
    }
}

class DummyPushNotification{
    send(){
        console.log("Sending Push Notification: ");
    }   
}

//now in order to use them in out application
//we need to create the object of them and use them where necessary

const type = "email"; //this can be dynamic based on user preference

if(type === "email"){
    const notification = new DummyEmailNotification();
    notification.send();
} else if(type === "sms"){
    const notification = new DummySMSNotification();
    notification.send();
} else if(type === "push"){
    const notification = new DummyPushNotification();
    notification.send();
}

//now this works
//but imagine our application is growing
//and we have this kind of objects everywhere in our codebase
//this is not a good practice
//because if we want to add a new notification type
//we have to go through our entire codebase and add the new type
//this is not scalable and maintainable
//the real problem is object creation logic is scattered across the codebase

//the basic idea of the factory pattern is
//it says "don't create objects directly by yourself everywhere, 
//instead, delegate the responsibility of creating objects to a factory"

//like you go to a car factory and want BMW
//the factory will create the BMW for you
//you don't have worry about engines, wheels etc.

//lets build the factory for our notification system

//first we need to define an interface 

interface SystemNotification{
    send(): void;
}

//now our different notification class will implement this interface
class EmailNotification implements SystemNotification{
    send(){
        console.log("Sending Email Notification: ");
    }
}

class SMSNotification implements SystemNotification{
    send(){
        console.log("Sending SMS Notification: ");
    }
}

class PushNotification implements SystemNotification{
    send(){
        console.log("Sending Push Notification: ");
    }
}

//now create the factory

class NotificationFactory{
    static create(type: string): SystemNotification{
        if(type === "email"){
            return new EmailNotification();
        } else if(type === "sms"){
            return new SMSNotification();
        } else if(type === "push"){
            return new PushNotification();
        }
        throw new Error("Invalid notification type");
    }
}

//now look what happened.

//previouly we were doing

const dummyEmailNotification = new DummyEmailNotification();
dummyEmailNotification.send();

//now with factory we can do this
const notification = NotificationFactory.create("email");
notification.send();

//now this doesn't tell you how the object is created
//it just gives you the email notification object
//new EmailNotification() the object creation logic is hidden from consumer
//and all handled by the factory
//now the application becomes cleaner

//other common examples are

//Payment gateway factory --PaymentFactory
//                                      -----> PaypalPayment
//                                      -----> StripePayment
//                                      -----> RazorpayPayment

//Database connection factory --DatabaseFactory
//                                      -----> MySQLConnection
//                                      -----> PostgreSQLConnection
//                                      -----> MongoDBConnection

//Storage service factory --StorageFactory
//                                      -----> S3Storage
//                                      -----> GoogleCloudStorage
//                                      -----> LocalStorage

//This is why factory pattern is particularly useful when your
//application has "multiple implementation of the same concept"
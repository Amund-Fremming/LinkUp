using Interfaces;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

namespace Controllers;

[ApiController]
[Route("api/event")]
public class EventController : ControllerBase
{

    public readonly IEventService _eventService;

    public EventController(IEventService eventService) {
        _eventService = eventService;
    }

    [HttpPost ("newevent")]
    public async Task<ActionResult> CreateEvent(Event newEvent, string creatorUserId)
    {
        throw new NotImplementedException();
    }

    [HttpDelete]
    public async Task<ActionResult> DeleteEvent(int eventId)
    {
        throw new NotImplementedException();
    }

    [HttpGet("{eventId}")]
    public async Task<ActionResult> GetEventByID(int eventId)
    {
        try 
        {
            var eventt = await _eventService.GetEventByID(eventId); 
            return Ok(eventt);
        } 
        catch(InvalidOperationException e) 
        {
            return BadRequest(e.Message);
        }
        catch(KeyNotFoundException e) 
        {
            return NotFound(e.Message);
        }
        catch(Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpGet("city/{city}")]
    public async Task<ActionResult> GetEventsInCity(string city)
    {
         try 
        {
            var events = await _eventService.GetEventsInCity(city);
            return Ok(events);
        } 
        catch(InvalidOperationException e) 
        {
            return BadRequest(e.Message);
        }
        catch(Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpGet("eventvisibility")]
    public async Task<ActionResult> GetUserEventsByVisibility(string visibility)
    {
        throw new NotImplementedException();
    }

    [HttpGet("eventfriends/{userId}")]
    public async Task<ActionResult> GetUserFriendEvents(string userId)
    {
        try 
        {
            var friendEvents = await _eventService.GetUserFriendEvents(userId);
            return Ok(friendEvents);
        } 
        catch(InvalidOperationException e) 
        {
            return BadRequest(e.Message);
        }
        catch(KeyNotFoundException e)
        {
            return NotFound(e.Message);
        }
        catch(Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpPut]
    public async Task<ActionResult> UpdateEvent(int eventId, Event updatedEvent)
    {
        throw new NotImplementedException();
    }
}